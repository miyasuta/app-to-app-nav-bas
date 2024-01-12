sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("freestyle.controller.View1", {
            onInit: function () {
                console.log("on init called")

            },

            onNavToCustomer: function (oEvent) {
                var customerId = this.byId("table").getSelectedContexts()[0].getObject().CustomerID;
                if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                    var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
                    oCrossAppNav.toExternal({
                        target : { semanticObject : "Customers", action : "display" },
                        params : { CustomerID : [ customerId ] }
                    })
                }

            }            
        });
    });
