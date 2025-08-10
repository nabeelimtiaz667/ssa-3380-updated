const FlattenData = (data) => {
  const submissionData = {};
  const convertToFormData = (data, parentKey = "") => {
    for (const key in data) {
      const fullKey = parentKey ? `${parentKey}[${key}]` : key;
      const value = data[key];

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (Array.isArray(item)) {
            item.forEach((subItem, subIndex) => {
              submissionData[`${fullKey}[${index}][${subIndex}]`] = subItem;
            });
          } else if (typeof item === "object") {
            for (const subKey in item) {
              submissionData[`${fullKey}[${index}][${subKey}]`] = item[subKey];
            }
          } else {
            submissionData[`${fullKey}[${index}]`] = item;
          }
        });
      } else if (typeof value === "object") {
        convertToFormData(value, fullKey);
      } else {
        submissionData[fullKey] = value;
      }
    }
  };
  convertToFormData(data);
  return submissionData;
};

export default FlattenData;
