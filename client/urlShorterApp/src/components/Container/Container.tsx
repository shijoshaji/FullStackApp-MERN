import * as React from 'react';
import FormContainer from './FormContainer';
import DataTable from '../DataTable/DataTable';
import { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import { serverURL } from '../../helpers/Constants';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);

  const fetchTableData = async () => {
    try {
      const res = await axios.get(`${serverURL}/shortURL`);
      console.log('res', res);
      console.log('data', data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchTableData();
  }, []);
  return (
    <>
      <FormContainer />
      <DataTable items={data}/>
    </>
  );
};

export default Container;
