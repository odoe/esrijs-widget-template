import * as registerSuite from "intern/lib/interfaces/object";
import { assert } from "chai";
import { spy, SinonSpy } from "sinon";

import <%name%>ViewModel from "../../../app/widgets/<%name%>/<%name%>ViewModel";

let viewModel = null;

registerSuite({
  name: "<%name%>,
  beforeEach() {
    viewModel = new <%name%>ViewModel();
  },
  afterEach() {
    viewModel = null;
  },
  "name is valid"() {
    assert.equal(viewModel.name, "Slagathor");
  }
});