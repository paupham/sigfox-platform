/**
 * This bootscript updates the MongoDB collection by creating indexes
 * @param app
 */
module.exports = (app: any) => {
  const AppSetting = app.models.AppSetting;
  AppSetting.findById('isMongodbIndexed', (err: any, appSetting: any) => {
    if (appSetting && appSetting.value === false) {
      const ds = app.dataSources.mongodb;
      // Update indexes for all models
      ds.connector.connect((err: any, db: any) => {
        db.collection('AccessToken').createIndexes([
          {key: {ttl: -1}, name: 'ttl'}
        ]);
        console.log('Updated index for AccessToken');

        db.collection('Alert').createIndexes([
          {key: {deviceId: 1}, name: 'deviceId'},
          {key: {active: 1}, name: 'active'},
          {key: {triggeredAt: -1}, name: 'triggeredAt'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Alert');

        db.collection('AlertHistory').createIndexes([
          {key: {deviceId: 1}, name: 'deviceId'},
          {key: {triggeredAt: -1}, name: 'triggeredAt'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for AlertHistory');

        db.collection('Beacon').createIndexes([
          {key: {type: 1}, name: 'type'},
          {key: {name: 1}, name: 'name'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Beacon');

        db.collection('Category').createIndexes([
          {key: {type: 1}, name: 'type'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Category');

        db.collection('Connector').createIndexes([
          {key: {type: 1}, name: 'type'},
          {key: {name: 1}, name: 'name'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Connector');

        db.collection('Dashboard').createIndexes([
          {key: {name: 1}, name: 'name'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Dashboard');

        db.collection('Device').createIndexes([
          {key: {name: 1}, name: 'name'},
          {key: {successRate: 1}, name: 'successRate'},
          {key: {locatedAt: -1}, name: 'locatedAt'},
          {key: {seenAt: -1}, name: 'seenAt'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {parserId: 1}, name: 'parserId'},
          {key: {categoryId: 1}, name: 'categoryId'},
          {key: {geolocId: 1}, name: 'geolocId'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Device');

        db.collection('Geoloc').createIndexes([
          {key: {type: 1}, name: 'type'},
          {key: {accuracy: -1}, name: 'accuracy'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {messageId: 1}, name: 'messageId'},
          {key: {deviceId: 1}, name: 'deviceId'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Geoloc');

        db.collection('Message').createIndexes([
          {key: {deviceId: 1}, name: 'deviceId'},
          {key: {time: -1}, name: 'time'},
          {key: {seqNumber: -1}, name: 'seqNumber'},
          {key: {data: 1}, name: 'data'},
          {key: {ack: 1}, name: 'ack'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Message');

        db.collection('Organization').createIndexes([
          {key: {name: 1}, name: 'name'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Organization');

        db.collection('OrganizationMessage').createIndexes([
          {key: {messageId: 1}, name: 'messageId'},
          {key: {deviceId: 1}, name: 'deviceId'},
          {key: {organizationId: 1}, name: 'organizationId'},
          {key: {createdAt: -1}, name: 'createdAt'}
        ]);
        console.log('Updated index for OrganizationMessage');

        db.collection('OrganizationDevice').createIndexes([
          {key: {deviceId: 1}, name: 'deviceId'},
          {key: {organizationId: 1}, name: 'organizationId'},
          {key: {createdAt: -1}, name: 'createdAt'}
        ]);
        console.log('Updated index for OrganizationDevice');

        db.collection('OrganizationCategory').createIndexes([
          {key: {categoryId: 1}, name: 'categoryId'},
          {key: {organizationId: 1}, name: 'organizationId'},
          {key: {createdAt: -1}, name: 'createdAt'},
        ]);
        console.log('Updated index for OrganizationCategory');

        db.collection('Organizationuser').createIndexes([
          {key: {organizationId: 1}, name: 'organizationId'},
          {key: {userId: 1}, name: 'userId'},
          {key: {createdAt: -1}, name: 'createdAt'},
        ]);
        console.log('Updated index for Organizationuser');

        db.collection('Parser').createIndexes([
          {key: {name: 1}, name: 'name'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Parser');

        db.collection('Role').createIndexes([
          {key: {name: 1}, name: 'name'},
          {key: {created: -1}, name: 'created'},
          {key: {modified: -1}, name: 'modified'}
        ]);
        console.log('Updated index for Role');

        db.collection('RoleMapping').createIndexes([
          {key: {principalType: 1}, name: 'principalType'},
          {key: {principalId: 1}, name: 'principalId'},
          {key: {roleId: 1}, name: 'roleId'}
        ]);
        console.log('Updated index for RoleMapping');

        db.collection('Widget').createIndexes([
          {key: {name: 1}, name: 'name'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'},
          {key: {dashboardId: 1}, name: 'dashboardId'},
          {key: {userId: 1}, name: 'userId'}
        ]);
        console.log('Updated index for Widget');

        db.collection('user').createIndexes([
          {key: {email: 1}, name: 'email'},
          {key: {username: 1}, name: 'username'},
          {key: {connected: 1}, name: 'connected'},
          {key: {createdAt: -1}, name: 'createdAt'},
          {key: {updatedAt: -1}, name: 'updatedAt'}
        ]);
        console.log('Updated index for user');

        // Disconnect from datasource
        ds.connector.disconnect();
      });

      appSetting.updateAttribute('value', true, (err: any, appSettingUpdated: any) => {
        if (err) console.error(err);
        else console.log("Updated the appSetting as: ", appSettingUpdated);
      });
    }
  });
};