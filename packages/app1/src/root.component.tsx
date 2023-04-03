// import { toUpperCaseText } from '../../utils1/src/mma-utils1';
// import { HelloComponent } from '../../utils2/src/mma-utils2';
import { toUpperCaseText } from "@mma/utils1";
import { HelloComponent } from "@mma/utils2";

export default function Root(props) {
  return (
    <div>
      <section>{toUpperCaseText(`${props.name} is mounted!`)}</section>
      <HelloComponent />
    </div>
  );
}
