/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Widget = require("esri/widgets/Widget");

import <%name%>ViewModel from "./<%name%>/<%name%>ViewModel";

import { aliasOf, subclass, declared } from "esri/core/accessorSupport/decorators";
import { renderable, tsx } from "esri/widgets/support/widget";

import * as i18n from "dojo/i18n!./<%name%>/nls/<%name%>";

const CSS = {
  base: "esri-widget <%name-lower%>-base"
};

@subclass("app.widgets.<%name%>")
class <%name%> extends declared(Widget) {

  @aliasOf("viewModel.name")
  @renderable()
  name: string;

  @property({
    type: <%name%>ViewModel
  })
  viewModel= new <%name%>ViewModel();

  render() {
    return (
      <div class={CSS.base}>
        <p>
          i18n.welcome {this.name}!
        </p>
      </div>
    );
  }

}

export = <%name%>;