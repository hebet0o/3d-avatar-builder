/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0b4y23l20bw1a10",
    "created": "2024-11-08 17:08:35.403Z",
    "updated": "2024-11-08 17:08:35.403Z",
    "name": "CustomizationGroups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rrcltmht",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "079xuvoh",
        "name": "position",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0b4y23l20bw1a10");

  return dao.deleteCollection(collection);
})
