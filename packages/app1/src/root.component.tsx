import { anotherText, toLowerCaseText } from "@mma/utils1";
import { toUpperCaseText } from "@mma/utils1";
import { HelloComponent, HelloComponentV2 } from "@mma/utils2";

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
        <div>
          {toLowerCaseText(
            `${props.name} is calling toLowerCaseText with this text!`
          )}
        </div>
        <div>{anotherText()}</div>
      </section>
      <section>
        <HelloComponent />
        <HelloComponentV2 />
      </section>
    </div>
  );
}
