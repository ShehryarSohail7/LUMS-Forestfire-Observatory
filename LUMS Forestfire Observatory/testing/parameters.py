import ee 
# from io import StringIO

ee.Authenticate()
service_account = "lums-forest-fire-observatory@forest-fire-obs.iam.gserviceaccount.com"
credentials = ee.ServiceAccountCredentials(service_account, "forest-fire-obs-5966ba29fefa.json")
ee.Initialize(credentials=credentials, project='forest-fire-obs')
print(ee.String('Hello, Earth Engine!').getInfo())