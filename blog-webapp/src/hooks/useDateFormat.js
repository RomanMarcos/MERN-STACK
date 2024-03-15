import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const useDateFormat = (dateFromMongo) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const formatted = format(dateFromMongo, 'dd/MM/yyyy');
    setFormattedDate(formatted);
  }, [dateFromMongo]);

  return formattedDate;
}

export default useDateFormat;
