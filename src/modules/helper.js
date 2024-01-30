export const phoneMask = (phoneInput, format = 'ru') => {
  const formatForPhone = (phoneNumber) => {
    const formatRu = () => {
        const clearPhone = phoneNumber.replace(/\+7/g,'').replace(/[\D]/g, '');
        const phonePosition = clearPhone.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        let phoneFormat = '';

        if (clearPhone.length < 4) {
          phoneFormat = `+7 (${phonePosition[1]}`;
        } else if (clearPhone.length < 7) {
          phoneFormat = `+7 (${phonePosition[1]}) ${phonePosition[2]}`;
        } else if (clearPhone.length < 9) {
          phoneFormat = `+7 (${phonePosition[1]}) ${phonePosition[2]}-${phonePosition[3]}`;
        } else {
          phoneFormat = `+7 (${phonePosition[1]}) ${phonePosition[2]}-${phonePosition[3]}-${phonePosition[4]}`
        }

        return phoneFormat;
    }

    switch(format) {
      case 'ru':
        return formatRu();
    }
  }; 

  if (phoneInput.tagName.toLowerCase() === 'input' && phoneInput.name === 'phone') {
    return formatForPhone(phoneInput.value);
  }

  return '';
};