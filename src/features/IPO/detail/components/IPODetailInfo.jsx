import { Fragment } from "react";
import IPOContainer from "../layout/IPOContainer";
import TextContainer from "../../components/TextContainer";

const IPODetailInfo = () => {
  return (
    <Fragment>
      <IPOContainer title="IPO details">
        <IPOContainer showBorderOnMobile>
          <section className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <TextContainer
              title={"3,600"}
              desc={"issue Size"}
              className="text-base [&>p]:order-1"
            />
            <TextContainer
              title={"3,600"}
              desc={"issue Size"}
              className="text-base [&>p]:order-1"
            />
            <TextContainer
              title={"3,600"}
              desc={"issue Size"}
              className="text-base [&>p]:order-1"
            />
            <TextContainer
              title={"3,600"}
              desc={"issue Size"}
              className="text-base [&>p]:order-1"
            />
          </section>
        </IPOContainer>
      </IPOContainer>
    </Fragment>
  );
};

export default IPODetailInfo;
