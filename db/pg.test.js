const { Pool} = require('pg');
const log = require("loglevel");

const sql = `
SELECT ST_AsBinary("estimated_geometric_location") AS geom,"count","count_text","id","latlon","type","zoom_to" FROM (
                /* sql case1 */
          SELECT
            'cluster' AS type,
            'case1 with zoom target tile' AS log,
            cluster_1.id,
            cluster_1.estimated_geometric_location,
            cluster_1.latlon,
            cluster_1.region_type,
            cluster_1.count,
            cluster_1.count_text,
            zoom_target.centroid zoom_to
          FROM (
              /* sql case1 tile */
              SELECT
              'cluster' AS type,
              'case1 tile' AS log,
              NULL AS zoom_to,
              region_id id,
              centroid estimated_geometric_location,
              St_asgeojson(centroid) latlon,
              type_id as region_type,
              count(tree_region.id) count,
              CASE WHEN count(tree_region.id) > 1000
              THEN  (count(tree_region.id) / 1000) || 'K'
              ELSE count(tree_region.id) || ''
              END AS count_text
              FROM active_tree_region tree_region
              WHERE zoom_level = 2
              GROUP BY region_id, centroid, type_id
          ) cluster_1
          LEFT JOIN
          (SELECT
            DISTINCT ON
            (region.id) region.id region_id,
            contained.region_id most_populated_subregion_id,
            contained.total,
            contained.zoom_level,
            ST_ASGeoJson(contained.centroid) centroid
          FROM
            (
            SELECT
              region_id,
              zoom_level
            FROM active_tree_region tree_region
            WHERE
              zoom_level = 2
            GROUP BY
              region_id,
              zoom_level ) populated_region
          JOIN region ON
            region.id = populated_region.region_id
          JOIN (
            SELECT
              region_id,
              zoom_level,
              count(tree_region.id) AS total,
              centroid
            FROM active_tree_region tree_region
            WHERE
              zoom_level = 4
            GROUP BY
              region_id,
              zoom_level,
              centroid ) contained ON
            ST_CONTAINS(region.geom,
            contained.centroid)
          WHERE
            TRUE
          ORDER BY
            region.id,
            total DESC
          ) zoom_target
          ON cluster_1.id = zoom_target.region_id
) as cdbq WHERE "estimated_geometric_location" && ST_MakeEnvelope(-179.9999996159564,47.98992166812654,-54.84375000033869,85.05112874735956,4326)

`;

describe("pg", () => {



  it("load", async () => {
    const pool = new Pool({ connectionString: process.env.DB_URL });
    const tasks = [];
    for(let i = 0; i < 1; i++){
      const task = pool.query({
        text: sql,
        values:[]
      }).then(res => {
        log.warn("finished");
      });
      tasks.push(task);
    }
    await Promise.all(tasks);
  }, 1000*60*30);


  describe("pool", () => {
    let pool;
    beforeEach(async () => {
      pool = new Pool({ 
        connectionString: process.env.DB_URL,
        max: 20,
      });
    });

    afterEach(async () => {
        await pool.end();
      
    });

    it.only("load pool", async () => {
      const tasks = [];
      for(let i = 0; i < 100; i++){
        const task = pool.query({
          text: sql,
          values:[]
        }).then(res => {
          log.warn("finished");
        });
        tasks.push(task);
      }
      setInterval(() => {
        log.warn("conn:%d,%d,%d", pool.waitingCount,pool.idleCount, pool.totalCount);
      }, 5000);
      await Promise.all(tasks);
    }, 1000*60*30);
  });
});
