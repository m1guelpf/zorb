import { useState } from "react";
import { css, cx } from "@emotion/css";
import Octo from "./octo";
import { ZorbCards } from "./ZorbCards";
import { RoundedContainer } from "./RoundedContainer";
import { ZORB_CONTRACT } from "./env-vars";
import { TimeLeft } from "./TimeLeft";

export const Frame = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={css`
        font-family: "DM Mono";

        min-height: 100vh;
      `}
    >
      <div
        className={css`
          padding: 0px 10px;
          display: flex;

          display: flex;
          justify-content: space-between;
          align-items: center;

          margin-bottom: 20px;
        `}
      >
        <code
          className={css`
            color: #f6f6f6;
          `}
        >
          <span
            className={css`
              opacity: 0.5;
            `}
          >
            npm i{" "}
          </span>
          <span>@zoralabs/zorb</span>
        </code>
        <a target="_BLANK" href="https://github.com/ourzora/zorb">
          <Octo />
        </a>
      </div>
      <div
        className={css`
          @media only screen and (min-width: 800px) {
            display: flex;
            flex-direction: row-reverse;
          }
        `}
      >
        <div
          className={css`
            flex-basis: 446px;
            @media only screen and (min-width: 800px) {
              margin-top: 0;
              margin-left: 30px;
            }
          `}
        >
          <RoundedContainer>
            <p
              className={css`
                font-family: Inter;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 25px;

                /* or 156% */

                color: #ffffff;

                opacity: 0.75;

                sup {
                  opacity: 0.5;
                }
              `}
            >
              In celebration of the one-year anniversary of the Zora protocol
              and the initial release of{" "}
              <code
                className={css`
                  font-family: "DM Mono";
                `}
              >
                zorb
              </code>
              , we invite you to mint a commemorative NFT for your collection.
              Minting is open for 24 hours on New Years Day and cements your
              status as an early supporter of Zora.
            </p>
            <div
              className={css`
                display: flex;
                align-items: center;
              `}
            >
              <button
                className={css`
                  background: #f6f6f6;
                  border-radius: 4px;

                  font-family: Inter;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 25px;
                  color: #000;

                  padding: 17px 31px;
                  border: 0;
                  cursor: pointer;
                `}
              >
                Mint now
              </button>
              <div
                className={css`
                  margin-left: 25px;
                  font-family: Inter;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 25px;

                  /* identical to box height, or 156% */

                  color: #f6f6f6;

                  opacity: 0.5;
                `}
              >
                <TimeLeft />
              </div>
            </div>
          </RoundedContainer>
          <div
            className={css`
              height: 30px;
            `}
          >
            &nbsp;
          </div>
          <RoundedContainer>
            <dl
              className={css`
                display: flex;
                flex-flow: row wrap;

                dt {
                  flex-basis: 20%;

                  text-transform: uppercase;

                  font-family: Inter;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 20px;

                  /* identical to box height, or 167% */
                  letter-spacing: 0.05em;
                  text-transform: uppercase;

                  color: #ffffff;

                  opacity: 0.5;
                  padding-right: 10px;
                }

                dd {
                  flex-basis: 70%;
                  flex-grow: 1;
                  margin-left: 0;

                  font-family: DM Mono;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 20px;

                  /* identical to box height, or 167% */
                  font-feature-settings: "zero" on;

                  color: #f6f6f6;

                  opacity: 0.75;
                }
              `}
            >
              <dt>contract</dt>
              <dd>{ZORB_CONTRACT}</dd>
              <dt>№ minted</dt>
              <dd>1</dd>
              <dt>price</dt>
              <dd>Free. Just pay gas.</dd>
              <dt>starts</dt>
              <dd>Jan 1 2022, 0:00 UTC</dd>
              <dt>ends</dt>
              <dd>Jan 2 2022, 0:00 UTC</dd>
            </dl>
          </RoundedContainer>
        </div>

        <div
          className={css`
            flex: 1;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-self: flex-start;
          `}
        >
          <ZorbCards />
        </div>
      </div>
    </div>
  );
};