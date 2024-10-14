function Item(title, priority = 1) {
  const ITEMDATA = {
    title,
    description: "",
    dueDate: "",
    priority,
    status: "Open",
  };

  const setTitle = (title) => {
    ITEMDATA.title = title;
  };
  const setDueDate = (date) => {
    const datePattern = /\d{4}\/\d{2}\/\d{2}/;
    if (!date.match(datePattern)) {
      console.warn("Wrong date format. Use YYYY/MM/DD");
    } else {
      ITEMDATA.dueDate = date;
    }
  };

  const setPriority = (priority) => {
    if (priority >= 3 || priority < 0) {
      console.warn("Priority is only 0, 1, 2");
    } else {
      ITEMDATA.priority = priority;
    }
  };

  const setDescription = (description) => {
    ITEMDATA.description = description;
  };

  const setStatus = (status) => {
    if (status != "Open" || status != "Archived" || status != "Completed") {
      console.warn(
        `"${status}" status does not exist. Open/Archived/Completed only.`
      );
    } else {
      ITEMDATA.status = status;
    }
  };

  const getItemData = () => {
    return ITEMDATA;
  };

  return {
    setTitle,
    getItemData,
    setPriority,
    setStatus,
    setDescription,
    setDueDate,
  };
}

export { Item };
