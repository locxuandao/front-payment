import classNames from "classnames/bind";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Help, ExpandMore } from "@mui/icons-material";

import styles from "./AboutService.module.scss";

const cx = classNames.bind(styles);

export const Aboutservice = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("heading")}>Hỏi đáp về dịch vụ</div>

      <div className={cx("listAccordion")}>
        <Accordion className={cx("accordion")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            className={cx("accordionSummart")}
          >
            <Help className={cx("icon")} />
            <Typography className={cx("textHeading")}>
              Thanh toán thất bại đã trừ tiền?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Trường hợp giao dịch đã trừ tiền nhưng trạng thái thất bại/đang
              chờ xử lý, hệ thống sẽ hoàn tiền về thẻ (7 - 10 ngày, thanh toán
              thẻ ATM/Quốc tế) hoặc số dư Ví (48h, thanh toán Ví SPay). Quý
              khách vui lòng theo dõi số dư ngân hàng hoặc Ví SPay và thực hiện
              lại giao dịch nhé. Trường hợp quá thời hạn nhưng chưa được hoàn
              tiền, Quý khách vui lòng liên hệ trực tiếp tới bộ phận CSKH qua
              hotline: 1900 88 68 32 (T2 - T6, 9h - 17h) hoặc gửi yêu cầu tới
              địa chỉ email: hotro@spay.vn (8h - 22h) để được hỗ trợ.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={cx("accordion")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            className={cx("accordionSummart")}
          >
            <Help className={cx("icon")} />
            <Typography className={cx("textHeading")}>
              Thanh toán thành công nhưng chưa gạch hóa đơn?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Quý khách vui lòng liên hệ trực tiếp tới bộ phận CSKH qua hotline:
              1900 88 68 32 (T2 - T6, 9h - 17h) hoặc gửi yêu cầu tới địa chỉ
              email: hotro@Spay.vn (8h - 22h) để được hỗ trợ. Trường hợp Quý
              khách còn nợ cước do nhập sai mã hóa đơn, rất tiếc 9Shop chưa thể
              hỗ trợ hoàn giao dịch đã thành công. Quý khách lưu ý kiểm tra kĩ
              thông tin trước khi thanh toán để tránh việc thanh toán nhầm dịch
              vụ.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={cx("accordion")}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            className={cx("accordionSummart")}
          >
            <Help className={cx("icon")} />
            <Typography className={cx("textHeading")}>
              Có chính sách chiết khấu riêng dành cho đại lý không
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Rất tiếc hiện tại giá bán trên SShop là mức chiết khấu tốt nhất
              dành cho mọi tệp khách hàng và chưa có chính sách chiết khấu riêng
              dành cho khách hàng là đại lý. Trường hợp Quý khách có nhu cầu tìm
              hiểu thêm thông tin và mong muốn hợp tác, Quý khách vui lòng liên
              hệ trực tiếp bộ phận kinh doanh qua email: biz@Spay.vn
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
