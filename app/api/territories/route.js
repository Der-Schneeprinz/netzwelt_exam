export async function GET() {
    const response = await fetch("https://netzwelt-devtest.azurewebsites.net/Territories/All", {
        method: "GET",
        mode: "cors",
        headers: {
            Accept: "application/json"
        }
    })
    .catch((error) => { 
        console.log("Failed to get terretories.\n", error);
        return new Response("Failed to get terretories.", { status: 500 });
    });
    const temp = JSON.stringify(await response.json())
    console.log(temp)
    return new Response(temp, { status: 200 });
}