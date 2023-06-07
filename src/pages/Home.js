import React, { useState, useEffect } from "react";
import axios from "../axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [profit, setProfit] = useState({});

  useEffect(() => {
    handlerFetchData();
  }, []);
  const handlerFetchData = async () => {
    const res = await axios.get("/product");
    setData(res?.data?.products);
    setProfit(res?.data?.products[0]);
  };


  return (
    <>
      <div className="bg-theme_color-dark w-full relative">
        <div className="flex justify-between py-4 px-5 items-center">
          <div className="w-[300px] h-[70px]">
            <img
              src="/assets/hold.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          {/* center */}
          <div className="flex">
            <div className="flex items-center space-x-4 relative">
              <button className="button">INR</button>
              <button
                className="button relative"
                onClick={() => setToggle(!toggle)}
              >
                {profit?.product?.base_unit?.toUpperCase()}
                {toggle && (
                  <div
                    className="bg-white text-black w-36 p-1 text-left absolute
                top-10 -left-1"
                  >
                    {
                      data?.map((item, index) => (
                        <p
                      className="pl-5 p-1 cursor-pointer"
                      onClick={() => setProfit(item)}
                    >
                      {item?.product?.base_unit?.toUpperCase()}
                    </p>
                      ))
                    }
                  </div>
                )}
              </button>
              <button className="button">BUY BTC</button>
            </div>
          </div>

          {/* right */}

          <div className="flex items-center space-x-4">
            <div
              className="text-white border-[3px] border-theme_color-light_blue w-[40px] h-[40px]
            rounded-full flex justify-center items-center
            "
            >
              25
            </div>

            <div
              className="bg-theme_color-light_blue h-10
            flex items-center px-4 rounded text-white space-x-2"
            >
              <img src="/assets/send.png" alt="" className="h-4 w-4" />
              <span className="font-medium text-base">Connect Telegram</span>
            </div>

            <div
              className="bg-theme_color-gray_light rounded-full
             w-14 h-9 p-1 relative"
            >
              <div
                className="bg-theme_color-light_blue rounded-full
              w-7 h-7 absolute right-1"
              ></div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="w-full mx-auto max-w-[1350px] py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-center">
              <h1 className="headline">0.4%</h1>
              <p className="headline_paragraph">5 Mins</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="headline">0.91%</h1>
              <p className="headline_paragraph">1 Hour</p>
            </div>

            <div className="text-center">
              <p className=" text-gray-500 text-2xl font-medium pb-2">
                Best Price to Trade
              </p>
              <h1 className="text-white font-normal text-[80px]">
                ₹ {profit?.product?.buy}
              </h1>
              <p className="headline_paragraph pt-3">
                Average {profit.product?.base_unit} net price including commission
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="headline">9.71%</h1>
              <p className="headline_paragraph">1 Day</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="headline">4.14%</h1>
              <p className="headline_paragraph">1 Days</p>
            </div>
          </div>
        </div>

        <div className="px-4 w-full mt-4">
          <table className="w-full border-separate  m-0 max-w-full border-spacing-y-4">
            <thead>
              <tr>
                <th className="text-2xl text-gray-500">#</th>
                <th className="text-2xl text-gray-500 ">Platform</th>
                <th className="text-2xl text-gray-500">Last Traded Price</th>
                <th className="text-2xl text-gray-500">Buy / Sell Price</th>
                <th className="text-2xl text-gray-500">Difference</th>
                <th className="text-2xl text-gray-500">Savings</th>
              </tr>
            </thead>
            <tbody className="bg-theme_color-gray_light">
              <tr className="table_row">
                <td className="table_td rounded-l-[10px]">1</td>
                <td className="table_td flex items-center space-x-4">
                  <img src="/assets/wazir.png" alt="" className="w-8 h-8 rounded-full"/>
                 <span>WazirX</span>
                </td>
                <td className="table_td">₹ 24,35,299</td>
                <td className="table_td">₹ 24,35,299/₹ 24,35,299</td>
                <td className="table_td text-red-400">-6.25%</td>
                <td className="table_td text-theme_color-light_blue rounded-r-[10px]">
                  ₹ 3,04,821
                </td>
              </tr>
              <tr className="table_row">
                <td className="table_td rounded-l-[10px]">2</td>
                <td className="table_td flex items-center space-x-4">
                <img src="/assets/bit.png" alt="" className="w-8 h-8 rounded-full"/>
                  <span>Bitbns</span>
                </td>
                <td className="table_td">₹ 24,35,299</td>
                <td className="table_td">₹ 24,35,299/₹ 24,35,299</td>
                <td className="table_td text-red-400">-6.25%</td>
                <td className="table_td text-theme_color-light_blue rounded-r-[10px]">
                  ₹ 3,04,821
                </td>
              </tr>
              <tr className="table_row">
                <td className="table_td rounded-l-[10px]">3</td>
                <td className="table_td flex items-center space-x-4">
                <img src="/assets/colo.png" alt="" className="w-8 h-8 rounded-full"/>
                <span>Colodax</span>
                </td>
                <td className="table_td">₹ 24,35,299</td>
                <td className="table_td">₹ 24,35,299/₹ 24,35,299</td>
                <td className="table_td text-red-400">-6.25%</td>
                <td className="table_td text-theme_color-light_blue rounded-r-[10px]">
                  ₹ 3,04,821
                </td>
              </tr>
              <tr className="table_row">
                <td className="table_td rounded-l-[10px]">4</td>
                <td className="table_td flex items-center space-x-4">
                <img src="/assets/zeb.png" alt="" className="w-8 h-8 rounded-full"/>
                <span>Zebpay</span>
                </td>
                <td className="table_td">₹ 24,35,299</td>
                <td className="table_td">₹ 24,35,299/₹ 24,35,299</td>
                <td className="table_td text-red-400">-6.25%</td>
                <td className="table_td text-theme_color-light_blue rounded-r-[10px]">
                  ₹ 3,04,821
                </td>
              </tr>
              <tr className="table_row">
                <td className="table_td rounded-l-[10px]">5</td>
                <td className="table_td flex items-center space-x-4">
                <img src="/assets/coin.png" alt="" className="w-8 h-8 rounded-full"/>
                <span>CoinDCX</span>
                </td>
                <td className="table_td">₹ 24,35,299</td>
                <td className="table_td">₹ 24,35,299/₹ 24,35,299</td>
                <td className="table_td text-red-400">-6.25%</td>
                <td className="table_td text-theme_color-light_blue rounded-r-[10px]">
                  ₹ 3,04,821
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-1 w-full border-t border-gray-500 pb-1">
          <div className="flex justify-between px-3">
            <div>
              <p className="text-gray-600 font-normal text-[12px]">
                Copyright © 2019 HodlInfo.com
              </p>
            </div>

            <div>
              <p className="text-gray-600 font-normal text-[12px]">Support</p>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 w-full bg-theme_color-dark flex justify-center p-1">
          <button
            className=" text-theme_color-light_blue border-2 border-theme_color-light_blue
        p-2 px-4 hover:bg-theme_color-light_blue hover:text-white transition-all duration-300
        font-normal rounded tracking-wide"
          >
            Add hodlinfo to home screen
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
