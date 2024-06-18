import { useState } from "react";
import { BusinessTypes, Types } from "./types";
import { texts, personInfo, initTypes, items } from "./consts";
import "./App.css";
import Switch from "./components/Switch";

const showActive = (types: Types[], active: BusinessTypes, id: number) => {
  return types.find((i) => i.index === active)?.actives.includes(id);
};

function App() {
  const [active, setActive] = useState<BusinessTypes>(
    BusinessTypes.SMALLBUSINESS
  );
  const [types, setTypes] = useState(initTypes);

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
                  showActive(types, active, item.id)
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
                  active={!!showActive(types, active, item.id)}
                  onClick={() =>
                    setTypes((state) =>
                      state.map((i) =>
                        i.index === active
                          ? i.actives.includes(item.id)
                            ? {
                                ...i,
                                actives: i.actives.filter((j) => j !== item.id),
                              }
                            : { ...i, actives: [...i.actives, item.id] }
                          : i
                      )
                    )
                  }
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
                {personInfo.name}
              </h3>
              <h4 className="text-center text-init text-[14px] mb-3.5">
                {personInfo.position}
              </h4>

              <p className="text-center text-title">{personInfo.desc}</p>
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
                  active={!!showActive(types, active, item.id)}
                  onClick={() =>
                    setTypes((state) =>
                      state.map((i) =>
                        i.index === active
                          ? i.actives.includes(item.id)
                            ? {
                                ...i,
                                actives: i.actives.filter((j) => j !== item.id),
                              }
                            : { ...i, actives: [...i.actives, item.id] }
                          : i
                      )
                    )
                  }
                />
              </div>
            ))}
          </div>

          <div
            className={`line-1 ${showActive(types, active, 1) ? "active" : ""}`}
          />
          <div
            className={`line-2 ${showActive(types, active, 1) ? "active" : ""}`}
          />

          <div
            className={`line-3 ${showActive(types, active, 3) ? "active" : ""}`}
          />
          <div
            className={`line-4 ${showActive(types, active, 3) ? "active" : ""}`}
          />

          <div
            className={`line-5 ${showActive(types, active, 4) ? "active" : ""}`}
          />
          <div
            className={`line-6 ${showActive(types, active, 4) ? "active" : ""}`}
          />

          <div
            className={`line-7 ${showActive(types, active, 6) ? "active" : ""}`}
          />
          <div
            className={`line-8 ${showActive(types, active, 6) ? "active" : ""}`}
          />

          <div
            className={`line-9 ${showActive(types, active, 2) ? "active" : ""}`}
          />

          <div
            className={`line-10 ${
              showActive(types, active, 5) ? "active" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
