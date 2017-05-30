import * as registerSuite from "intern/lib/interfaces/object";
import { assert } from "chai";
import { spy, SinonSpy } from "sinon";

import <%name%> from "../../../app/widgets/<%name%>";

registerSuite({
  name: "<%name%>,
  beforeEach() {
  },
  afterEach() {
  },
  render() {
    assert.isNotNull(<%name%>);
  }
});