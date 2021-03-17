"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TaskElement_1 = require("./TaskElement");
var db_1 = require("../../db/db");
require("../../styles/scrollbar.css");
require("../../styles/task-list.css");
var TaskList = function () {
    var getTodos = function () {
        return Object.keys(db_1["default"].todos).forEach(function (key) { return (react_1["default"].createElement(TaskElement_1["default"], { value: db_1["default"].todos[key] })); });
    };
    var todos = getTodos();
    console.log(todos);
    return (react_1["default"].createElement("div", { className: "col-12 list-container" },
        react_1["default"].createElement("h1", { className: "no-tasks text-center " }, "no tasks to display")));
};
exports["default"] = TaskList;
