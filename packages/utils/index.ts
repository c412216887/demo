import type { AxiosResponse } from "axios";
export function getAxiosData(data: AxiosResponse) {
  if (data.status === 200) {
    return data.data.code === 0 ? data.data.data : null;
  }
  return null;
}
