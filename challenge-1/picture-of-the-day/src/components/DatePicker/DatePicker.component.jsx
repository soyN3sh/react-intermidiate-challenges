import React, { useContext } from "react";
import { MyDatePicker, DpInput } from "./DatePicker.styles";
import GlobalContext from "../../providers/GlobalContext";
import { actions } from "../../utils/reducer/actions";
import { parseISO, format } from "date-fns";

const DatePicker = () => {
  const {
    state: {
      apiParams: { date },
    },
    dispatch,
  } = useContext(GlobalContext);

  const handleDateChange = (e) => {
    dispatch({
      type: actions.setApiParams,
      payload: { date: format(parseISO(e.target.value), "yyyy-MM-dd") },
    });
  };

  return (
    <MyDatePicker>
      <DpInput
        id="datepicker"
        onChange={handleDateChange}
        value={date}
      ></DpInput>
    </MyDatePicker>
  );
};

export default DatePicker;
