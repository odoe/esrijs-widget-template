/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import Accessor = require("esri/core/Accessor");

import { subclass, declared, property } from "esri/core/accessorSupport/decorators";

@subclass()
class <%name%>ViewModel extends declared(Accessor) {

  @property()
  name = "Slagathor"

  constructor() {
    super();
  }

}

export default <%name%>ViewModel;
