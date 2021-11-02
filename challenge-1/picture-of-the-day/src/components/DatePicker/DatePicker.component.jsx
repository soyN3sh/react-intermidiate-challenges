import React, { useContext } from "react";
import { MyDatePicker, Input } from "./DatePicker.styles";
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
      <Input id="datepicker" onChange={handleDateChange} value={date}></Input>
    </MyDatePicker>
  );
};

export default DatePicker;
