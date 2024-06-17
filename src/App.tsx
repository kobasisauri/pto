import { useState } from "react";
import { BusinessTypes } from "./types";
import { texts, types, items } from "./consts";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [active, setActive] = useState<BusinessTypes>(
    BusinessTypes.SMALLBUSINESS
  );

  return (
    <div className="container mx-auto py-4 flex justify-center">
      <div>
        <h1 className="text-center text-title font-bold text-4xl mb-4">
          {texts.title}
        </h1>
        <h3 className="text-center text-init text-xl max-w-[780px] mb-6 mx-auto">
          {texts.desctiption}
        </h3>

        <div className="flex justify-center align-center gap-1 mb-6">
          {types.map((item) => (
            <button
              className={`text-sm py-1.5 px-2.5 rounded-xl border ${
                active === item.index
                  ? "bg-main text-white"
                  : "text-btn-secondary border-[#1A07451A]"
              }`}
              key={item.index}
              onClick={() => setActive(item.index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="relative flex justify-between align-center gap-[120px]">
          <div className="flex flex-col gap-3.5">
            {items.slice(0, 3).map((item) => (
              <div
                className={`item flex items-center justify-between border-2 rounded-xl p-3 ${
                  types
                    .find((i) => i.index === active)
                    ?.actives.includes(item.id)
                    ? "border-main"
                    : "border-[#E8E6EC]"
                }`}
                key={item.id}
              >
                <div className="flex gap-1">
                  {/* <img src={item.img} height={48} width={48} /> */}
                  <div className="h-6 w-6 rounded-[10px] bg-main" />

                  <div>
                    <h5 className="text-title">{item.title}</h5>
                    <p className="text-init text-sm">{item.desc}</p>
                  </div>
                </div>

                <Switch
                  active={types
                    .find((i) => i.index === active)
                    ?.actives.includes(item.id)}
                />
              </div>
            ))}
          </div>
          <div
            className="relative flex items-center justify-center border-2 border-main rounded-3xl bg-[#F2EFFE]"
            style={{ height: 268, width: 380 }}
          >
            <div className="absolute h-[86px] w-[86px] top-[-30px] left-[147px] bg-main rounded-[10px]"></div>

            <div>
              <h3 className="text-center text-title text-xl font-bold">
                Lauren Robson
              </h3>
              <h4 className="text-center text-init text-[14px] mb-3.5">
                HR Director
              </h4>

              <p className="text-center text-title">
                “I want to lower PTO liability and keep my employess happy. I
                want to lower PTO liability.”
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            {items.slice(3, 6).map((item) => (
              <div
                className={`item flex items-center justify-between border-2 rounded-xl p-3 ${
                  types
                    .find((i) => i.index === active)
                    ?.actives.includes(item.id)
                    ? "border-main"
                    : "border-[#E8E6EC]"
                }`}
                key={item.id}
              >
                <div className="flex gap-1">
                  {/* <img src={item.img} height={48} width={48} /> */}
                  <div className="h-6 w-6 rounded-[10px] bg-main" />

                  <div>
                    <h5 className="text-title">{item.title}</h5>
                    <p className="text-init text-sm">{item.desc}</p>
                  </div>
                </div>

                <Switch
                  active={types
                    .find((i) => i.index === active)
                    ?.actives.includes(item.id)}
                />
              </div>
            ))}
          </div>

          <div
            className={`line-1 ${
              active === BusinessTypes.MEDIUMBUSINESS ? "active" : ""
            }`}
          />
          <div
            className={`line-2 ${
              active === BusinessTypes.MEDIUMBUSINESS ? "active" : ""
            }`}
          />

          <div
            className={`line-3 ${
              active === BusinessTypes.ENTERPRISE ? "active" : ""
            }`}
          />
          <div
            className={`line-4 ${
              active === BusinessTypes.ENTERPRISE ? "active" : ""
            }`}
          />

          <div
            className={`line-5 ${
              active === BusinessTypes.ENTERPRISE ? "active" : ""
            }`}
          />
          <div
            className={`line-6 ${
              active === BusinessTypes.ENTERPRISE ? "active" : ""
            }`}
          />

          <div
            className={`line-7 ${
              active === BusinessTypes.SMALLBUSINESS ? "active" : ""
            }`}
          />
          <div
            className={`line-8 ${
              active === BusinessTypes.SMALLBUSINESS ? "active" : ""
            }`}
          />

          <div
            className={`line-9 ${
              active === BusinessTypes.MEDIUMBUSINESS ? "active" : ""
            }`}
          />

          <div
            className={`line-10 ${
              active === BusinessTypes.ENTERPRISE ? "active" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
