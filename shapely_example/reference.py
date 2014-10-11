import shapely
import json
from shapely.geometry import shape, Point

j = json.loads(open("example.sfmta.geojson","r").read())
for f in j['features']:
  shortName = f['properties']['shortName']
  if shortName.strip() == "J":
    first_shape = shape(f['geometry']['geometries'][0])
    print first_shape.project(Point(37.5,-122.8), normalized=True)


