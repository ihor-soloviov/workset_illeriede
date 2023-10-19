/* eslint-disable react/prop-types */
import { Container } from "../Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/scrollbar";

import "./Table.scss";
import { TableSlide } from "../TableSlide/TableSlide";

const tableData = [
  {
    tr: "Preis",
    tdOne: "13.999,90 EUR",
    tdTwo: "15.499,90 EUR",
    tdThree: "17.999,90 EUR",
    tdFour: "19.999,90 EUR",
    tdFive: "22.499,90 EUR",
    weight500: true,
  },
  {
    tr: "Anlagengröße",
    tdOne: "bis 6 kWp",
    tdTwo: "bis 8 kWp",
    tdThree: "bis 10 kWp",
    tdFour: "bis 12 kWp",
    tdFive: "bis 15 kWp",
    weight500: false,
  },
  {
    tr: "PV-Module",
    tdOne: "7 - 13 Stück",
    tdTwo: "14 - 18 Stück",
    tdThree: "19 - 23 Stück",
    tdFour: "24 - 27 Stück",
    tdFive: "28 - 34 Stück",
    weight500: false,
  },
  {
    tr: "Speicher",
    tdOne: "5 kWh",
    tdTwo: "5 kWh",
    tdThree: "5 kWh",
    tdFour: "5 kWh",
    tdFive: "5 kWh",
    weight500: false,
  },
  {
    tr: "Wechselrichter",
    tdOne: "4 kW",
    tdTwo: "6 kW",
    tdThree: "8 kW",
    tdFour: "10 kW",
    tdFive: "12 kW",
    weight500: true,
  },
];

export const Table = () => {
  return (
    <div className="table-container">
      <div className="table">
        <Container>
          <h1>Die WorkSET-Sommeraktionspreise</h1>
        </Container>
        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={{
            dragSize: 75,
            draggable: true,
          }}
          modules={[FreeMode, Scrollbar]}
          className="table-swiper"
        >
          {tableData &&
            tableData.map((line) => (
              <SwiperSlide key={line.tr} className="table-swiper-slide">
                <TableSlide line={line} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
