import { connect } from "react-redux";
import * as actions from "../../store/actions";

function mapStateToProps(state) {
  return {
    entries: state.data.map(({ id }) => id)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCreate() {
      const id = `record-${Date.now()}-${Math.ceil(Math.random() * 1000)}`;

      dispatch(actions.onEdit(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
