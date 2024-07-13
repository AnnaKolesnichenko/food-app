// const SaladsPage = () => {
//   return (
//     <div>
//       <h1 style={{ color: "white" }}>Salads</h1>
//     </div>
//   );
// };

// export default SaladsPage;

{
	"info": {
		"_postman_id": "92ffafca-fa8d-4dd2-b9d8-f0b3f086debe",
		"name": "proPartSpain",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "32027782"
	},
	"item": [
		{
			"name": "Project",
			"item": [
				{
					"name": "adminRequest",
					"item": [
						{
							"name": "addProject",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "name",
											"value": "",
											"type": "text"
										},
										{
											"key": "completion",
											"value": "",
											"type": "text"
										},
										{
											"key": "size",
											"value": "",
											"type": "text"
										},
										{
											"key": "price_from",
											"value": "",
											"type": "text"
										},
										{
											"key": "size_m2",
											"value": "",
											"type": "text"
										},
										{
											"key": "location",
											"value": "",
											"type": "text"
										},
										{
											"key": "shortDescription.totalFloors",
											"value": "",
											"type": "text"
										},
										{
											"key": "shortDescription.type",
											"value": "",
											"type": "text"
										},
										{
											"key": "shortDescription.floor",
											"value": "",
											"type": "text"
										},
										{
											"key": "shortDescription.area",
											"value": "",
											"type": "text"
										},
										{
											"key": "shortDescription.rooms",
											"value": "",
											"type": "text"
										},
										{
											"key": "coordinates.lng",
											"value": "",
											"type": "text"
										},
										{
											"key": "coordinates.lat",
											"value": "",
											"type": "text"
										},
										{
											"key": "area",
											"value": "",
											"type": "text"
										},
										{
											"key": "link",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.EN.title",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.EN.description",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.UA.title",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.UA.description",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.RU.title",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.RU.description",
											"value": "",
											"type": "text"
										},
										{
											"key": "amenities",
											"value": "",
											"type": "text"
										},
										{
											"key": "multipartFiles",
											"type": "file",
											"src": []
										}
									]
								},
								"url": "http://localhost:8080/api/V1/admin/project"
							},
							"response": []
						},
						{
							"name": "addFloorPlans",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "priceFrom",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.name",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.location",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.priceFrom",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.description.totalFloors",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.description.type",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.description.floor",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.description.area",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.name",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.floor",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.bedrooms",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.bathroom",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.toilets",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.terrace",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.kitchen",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.buildedSurface",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.usefulSurface",
											"value": "",
											"type": "text"
										},
										{
											"key": "plan.planInfo.terracesSurface",
											"value": "",
											"type": "text"
										},
										{
											"key": "urlPicture",
											"type": "file",
											"src": []
										}
									]
								},
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/floorPlans/:projectid/:type",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										"floorPlans",
										":projectid",
										":type"
									],
									"variable": [
										{
											"key": "projectid",
											"value": "6659525d032f8a22ac2611ad"
										},
										{
											"key": "type",
											"value": "1"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "IsTop",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "projectId",
										"value": ""
									},
									{
										"key": "top",
										"value": "true"
									}
								],
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/top/:projectId?top=true",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										"top",
										":projectId"
									],
									"query": [
										{
											"key": null,
											"value": null,
											"disabled": true
										},
										{
											"key": "top",
											"value": "true"
										}
									],
									"variable": [
										{
											"key": "projectId",
											"value": "6659525d032f8a22ac2611ad"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "isHidden",
							"request": {
								"method": "PUT",
								"header": [],
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/hidden/:projectId?hidden=false",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										"hidden",
										":projectId"
									],
									"query": [
										{
											"key": "hidden",
											"value": "false"
										}
									],
									"variable": [
										{
											"key": "projectId",
											"value": "6659525d032f8a22ac2611ad"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "updateProject",
							"request": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "name",
											"value": "",
											"type": "text"
										},
										{
											"key": "completion",
											"value": "",
											"type": "text"
										},
										{
											"key": "size",
											"value": "",
											"type": "text"
										},
										{
											"key": "price_form",
											"value": "",
											"type": "text"
										},
										{
											"key": "size_m2",
											"value": "",
											"type": "text"
										},
										{
											"key": "location",
											"value": "",
											"type": "text"
										},
										{
											"key": "short_description.totalFloors",
											"value": "",
											"type": "text"
										},
										{
											"key": "short_description.type",
											"value": "",
											"type": "text"
										},
										{
											"key": "short_description.floor",
											"value": "",
											"type": "text"
										},
										{
											"key": "short_description.area",
											"value": "",
											"type": "text"
										},
										{
											"key": "short_description.rooms",
											"value": "",
											"type": "text"
										},
										{
											"key": "coordinates.lng",
											"value": "",
											"type": "text"
										},
										{
											"key": "coordinates.lat",
											"value": "",
											"type": "text"
										},
										{
											"key": "area",
											"value": "",
											"type": "text"
										},
										{
											"key": "link",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.EN.title",
											"value": "",
											"type": "text"
										},
										{
											"key": "about.EN.description",
											"value": "",
											"type": "text"
										},
										{
											"key": "amenities",
											"value": "",
											"type": "text"
										},
										{
											"key": "multipartFiles",
											"type": "file",
											"src": []
										}
									]
								},
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/:projectId",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										":projectId"
									],
									"variable": [
										{
											"key": "projectId",
											"value": "6659525d032f8a22ac2611ad"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deleteProject",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/:projectId",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										":projectId"
									],
									"variable": [
										{
											"key": "projectId",
											"value": "6659b5eb5541f5642f66e7be"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deletePictureByProject",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://localhost:8080/api/V1/project/deleteImage?projectId=664336358954891307cbc13b&filename=test2.jpeg",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"project",
										"deleteImage"
									],
									"query": [
										{
											"key": "projectId",
											"value": "664336358954891307cbc13b"
										},
										{
											"key": "filename",
											"value": "test2.jpeg"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deletePicturesByProject",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/pictures/:projectId",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										"pictures",
										":projectId"
									],
									"variable": [
										{
											"key": "projectId",
											"value": "65e8a8f10b1178a2d68a2768"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "deletePlan",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/deletePlan/:type?projectId=665719afb3ec4228a40d6438&planName=Test3",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										"deletePlan",
										":type"
									],
									"query": [
										{
											"key": "projectId",
											"value": "665719afb3ec4228a40d6438"
										},
										{
											"key": "planName",
											"value": "Test3"
										}
									],
									"variable": [
										{
											"key": "type",
											"value": "studio"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "getAllProject",
							"request": {
								"method": "GET",
								"header": [],
								"url": "http://localhost:8080/api/V1/admin/project"
							},
							"response": []
						},
						{
							"name": "getProjectById",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8080/api/V1/admin/project/:projectId",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8080",
									"path": [
										"api",
										"V1",
										"admin",
										"project",
										":projectId"
									],
									"variable": [
										{
											"key": "projectId",
											"value": "65e8a8f00b1178a2d68a2752"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "getAllProject",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/project?page=9&size",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"project"
							],
							"query": [
								{
									"key": "page",
									"value": "9"
								},
								{
									"key": "size",
									"value": null
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getProjectById",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/project/:projectId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"project",
								":projectId"
							],
							"variable": [
								{
									"key": "projectId",
									"value": "65e8a8f00b1178a2d68a2752"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getallProjectForMap",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:8080/api/V1/project/map"
					},
					"response": []
				},
				{
					"name": "FilterForProperties",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/project/filter?name=&offer=&beds=&minPrice=&maxPrice=&minSize=&maxSize=&type=&area=&page&size",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"project",
								"filter"
							],
							"query": [
								{
									"key": "name",
									"value": ""
								},
								{
									"key": "offer",
									"value": ""
								},
								{
									"key": "beds",
									"value": ""
								},
								{
									"key": "minPrice",
									"value": ""
								},
								{
									"key": "maxPrice",
									"value": ""
								},
								{
									"key": "minSize",
									"value": ""
								},
								{
									"key": "maxSize",
									"value": ""
								},
								{
									"key": "type",
									"value": ""
								},
								{
									"key": "area",
									"value": ""
								},
								{
									"key": "page",
									"value": null
								},
								{
									"key": "size",
									"value": null
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "FilterForMapPage",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/project/map/filter?name=&beds=7&minPrice=&maxPrice=&minSize=&maxSize=&type=&area=&minLng=&maxLng=&minLat=&maxLat=",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"project",
								"map",
								"filter"
							],
							"query": [
								{
									"key": "name",
									"value": ""
								},
								{
									"key": "beds",
									"value": "7"
								},
								{
									"key": "minPrice",
									"value": ""
								},
								{
									"key": "maxPrice",
									"value": ""
								},
								{
									"key": "minSize",
									"value": ""
								},
								{
									"key": "maxSize",
									"value": ""
								},
								{
									"key": "type",
									"value": ""
								},
								{
									"key": "area",
									"value": ""
								},
								{
									"key": "minLng",
									"value": ""
								},
								{
									"key": "maxLng",
									"value": ""
								},
								{
									"key": "minLat",
									"value": ""
								},
								{
									"key": "maxLat",
									"value": ""
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "loginAdmin",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "email",
									"value": "1234",
									"type": "text"
								},
								{
									"key": "password",
									"value": "1234",
									"type": "text"
								}
							]
						},
						"url": "http://localhost:8080/api/V1/auth/login"
					},
					"response": []
				},
				{
					"name": "RegisterAdmin",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "email",
									"value": "1234",
									"type": "text"
								},
								{
									"key": "password",
									"value": "1234",
									"type": "text"
								}
							]
						},
						"url": "http://localhost:8080/api/V1/auth/register"
					},
					"response": []
				}
			]
		},
		{
			"name": "FormSupport",
			"item": [
				{
					"name": "addSupport",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "name",
									"value": "Teodor",
									"type": "text"
								},
								{
									"key": "phone",
									"value": "+38080808080",
									"type": "text"
								},
								{
									"key": "projectId",
									"value": "664e658479440c667329150a,664e65a579440c667329150b",
									"type": "text"
								}
							]
						},
						"url": "http://localhost:8080/api/V1/support/addByProject"
					},
					"response": []
				},
				{
					"name": "addSupportByProject",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "name",
									"value": "",
									"type": "text"
								},
								{
									"key": "phone",
									"value": "",
									"type": "text"
								},
								{
									"key": "projectId",
									"value": "",
									"type": "text"
								},
								{
									"key": "description",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": "http://localhost:8080/api/V1/support/projects"
					},
					"response": []
				},
				{
					"name": "getSupportById",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/support/:{supportId}",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"support",
								":{supportId}"
							],
							"variable": [
								{
									"key": "{supportId}",
									"value": ""
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getAllSupport",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:8080/api/V1/support/all"
					},
					"response": []
				},
				{
					"name": "deleteSupportById",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/support/:{supportId}",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"support",
								":{supportId}"
							],
							"variable": [
								{
									"key": "{supportId}",
									"value": ""
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "New Request",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "http://localhost:8080/api/V1/support/all"
					},
					"response": []
				}
			]
		},
		{
			"name": "Amenity",
			"item": [
				{
					"name": "addAmenity",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "image_code ",
									"value": "",
									"type": "text"
								},
								{
									"key": "name",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": "http://localhost:8080/api/V1/amenity/add"
					},
					"response": []
				},
				{
					"name": "updateAmenity",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "image_code",
									"value": "",
									"type": "text"
								},
								{
									"key": "name",
									"value": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:8080/api/V1/amenity/add/:amenityId",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"amenity",
								"add",
								":amenityId"
							],
							"variable": [
								{
									"key": "amenityId",
									"value": ""
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getAmenity",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/amenity/:{amenityId}",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"amenity",
								":{amenityId}"
							],
							"variable": [
								{
									"key": "{amenityId}",
									"value": ""
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "getAllAmenities",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:8080/api/V1/amenity/all"
					},
					"response": []
				},
				{
					"name": "deleteAmenity",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:8080/api/V1/amenity/delete/:{amenityId}",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8080",
							"path": [
								"api",
								"V1",
								"amenity",
								"delete",
								":{amenityId}"
							],
							"variable": [
								{
									"key": "{amenityId}",
									"value": ""
								}
							]
						}
					},
					"response": []
				}
			]
		}
	]
}
