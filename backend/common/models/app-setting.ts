import {Model} from "@mean-expert/model";

/**
 * @module AppSetting
 * @description
 * Write a useful AppSetting Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: {name: "before save", type: "operation"},
  },
  remotes: {
    getVersion: {
      returns: {root: true, type: "object"},
      http: {path: "/version", verb: "get"},
    },
  },
})

class AppSetting {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {
  }

  // Example Operation Hook
  public beforeSave(ctx: any, next: Function): void {
    console.log("AppSetting: Before Save");
    if (ctx.instance) ctx.instance.createdAt = new Date();
    next();
  }

  public getVersion(next: Function): void {
    next(null, process.env.GIT_REV);
  }
}

module.exports = AppSetting;
