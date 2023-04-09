import { toUpperCaseText } from "@mma/utils1";
import { HelloComponent } from "@mma/utils2";

export default function Root(props: any) {
  return (
    <div>
      <section>
        <div>Hello from {props.name}!</div>
        <div>
          {toUpperCaseText(
            `${props.name} is calling toUpperCaseText with this text!`
          )}
        </div>
      </section>
      <section>
        <HelloComponent />
      </section>
    </div>
  );
}
