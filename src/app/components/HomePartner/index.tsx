import classNames from "classnames/bind";

import styles from "./HomeParter.module.scss";
import Visa from "assets/images/visa.png";
import Napas from "assets/images/napas.png";
import Master from "assets/images/mastercard.png";
import Ame from "assets/images/american.png";
import i5 from "assets/images/i5.png";
import i6 from "assets/images/i6.png";
import i7 from "assets/images/i7.png";
import i8 from "assets/images/i8.png";
import i9 from "assets/images/i9.png";
import i10 from "assets/images/i10.png";
import i11 from "assets/images/i11.png";
import i12 from "assets/images/i12.png";
import i13 from "assets/images/i13.png";
import i14 from "assets/images/i14.png";
import i15 from "assets/images/i15.png";
import ilast from "assets/images/ilast.png";

const cx = classNames.bind(styles);

export const HomePartner = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>Đối tác thanh toán</div>
      <div className={cx("listPartner")}>
        <div className={cx("list")}>
          <img src={Napas} alt="" className={cx("img")} />
          <img src={Visa} alt="" className={cx("img")} />
          <img src={Master} alt="" className={cx("img")} />
          <img src={Ame} alt="" className={cx("img")} />
          <img src={i5} alt="" className={cx("img")} />
          <img src={i6} alt="" className={cx("img")} />
          <img src={i7} alt="" className={cx("img")} />
          <img src={i8} alt="" className={cx("img")} />
        </div>
        <div className={cx("list")}>
          <img src={i9} alt="" className={cx("img")} />
          <img src={i10} alt="" className={cx("img")} />
          <img src={i11} alt="" className={cx("img")} />
          <img src={i12} alt="" className={cx("img")} />
          <img src={i13} alt="" className={cx("img")} />
          <img src={i14} alt="" className={cx("img")} />
          <img src={i15} alt="" className={cx("img")} />
          <img src={ilast} alt="" className={cx("img")} />
        </div>
      </div>
    </div>
  );
};
