import { appendFileSync } from "node:fs";
import { formatDate } from "../utility/dateFormeter";

export async function requestLogger(
    requestTime: any,
    request: Request,
    body: any,
    params: any,
    headers: any,
) {

    const formateddate = formatDate(requestTime);
    const apiUrl = request.url;
    const origin = headers.referer;
    // Your logging logic here
    console.log(request.url);
    console.log('Time: ', formateddate);
    console.log('apiUrl: ', apiUrl);
    console.log('origin: ', origin);

}

export default requestLogger;
