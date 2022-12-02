"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Shift = exports.Vehicle = exports.JaniatorTask = exports.CollectorTask = exports.Janiator = exports.Collector = exports.MCP = exports.Route = void 0;
var Route = /** @class */ (function () {
    function Route(_id, _routeName) {
        this.routeID = _id;
        this.routeName = _routeName;
    }
    return Route;
}());
exports.Route = Route;
var MCP = /** @class */ (function () {
    function MCP(_id, _location, _routeID, _workerCount) {
        this.capacity = 100;
        this.mcpID = _id;
        this.location = _location;
        this.routeID = _routeID;
        this.workerCount = _workerCount;
    }
    return MCP;
}());
exports.MCP = MCP;
var Vehicle = /** @class */ (function () {
    function Vehicle(_Id, _name) {
        this.capacity = 100;
        this.weight = 100;
        this.fuelConsumption = 100;
        this.vehicleID = _Id;
        this.vehicleName = _name;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
////////////////////////////////////
/////Task
////////////////////////////////////
var TaskStatus;
(function (TaskStatus) {
})(TaskStatus || (TaskStatus = {}));
var Task = /** @class */ (function () {
    function Task(_id, _month, _week) {
        this.taskID = _id;
        this.month = _month;
        this.week = _week;
    }
    return Task;
}());
var CollectorTask = /** @class */ (function (_super) {
    __extends(CollectorTask, _super);
    function CollectorTask(_routeID, _vehicleID, _collectorID, _month, _week) {
        var _this = this;
        CollectorTask.count++;
        _this = _super.call(this, CollectorTask.count, _month, _week) || this;
        _this.routeID = _routeID;
        _this.vehicleID = _vehicleID;
        _this.collectorID = _collectorID;
        return _this;
    }
    CollectorTask.count = 0;
    return CollectorTask;
}(Task));
exports.CollectorTask = CollectorTask;
var JaniatorTask = /** @class */ (function (_super) {
    __extends(JaniatorTask, _super);
    function JaniatorTask(_mcpID, _janiatorID, _month, _week) {
        var _this = this;
        JaniatorTask.count++;
        _this = _super.call(this, JaniatorTask.count, _month, _week) || this;
        _this.mcpID = _mcpID;
        _this.janiatorID = _janiatorID;
        return _this;
    }
    JaniatorTask.count = 0;
    return JaniatorTask;
}(Task));
exports.JaniatorTask = JaniatorTask;
////////////////////////////////
////User
////////////////////////////////
var Shift;
(function (Shift) {
    Shift["Morning"] = "Sang";
    Shift["Afternoon"] = "Toi";
    Shift["Evening"] = "Dem";
})(Shift || (Shift = {}));
exports.Shift = Shift;
var User = /** @class */ (function () {
    function User(_id, _wt) {
        this.phone = "0000000000";
        this.userID = _id;
        this.workTime = _wt;
    }
    ;
    return User;
}());
var Janiator = /** @class */ (function (_super) {
    __extends(Janiator, _super);
    function Janiator(_id, _wt) {
        var _this = _super.call(this, _id, _wt) || this;
        _this.workingArea = "testJaniatorArea";
        _this.userName = ("testJaniatorName" + _id);
        return _this;
    }
    return Janiator;
}(User));
exports.Janiator = Janiator;
var Collector = /** @class */ (function (_super) {
    __extends(Collector, _super);
    function Collector(_id, _wt) {
        var _this = _super.call(this, _id, _wt) || this;
        _this.licenseNumber = 123456;
        _this.userName = ("testCollectorName" + _id);
        return _this;
    }
    return Collector;
}(User));
exports.Collector = Collector;
var BackOfficer = /** @class */ (function (_super) {
    __extends(BackOfficer, _super);
    function BackOfficer(_id, _wt) {
        var _this = _super.call(this, _id, _wt) || this;
        _this.managementArea = "testmanagementArea";
        return _this;
    }
    return BackOfficer;
}(User));
