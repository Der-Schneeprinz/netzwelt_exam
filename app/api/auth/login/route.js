// export async function POST(req) {
//     const body = await req.json();

    
// }


export async function POST(req) {
    const response = await fetch("https://netzwelt-devtest.azurewebsites.net/Account/SignIn", {
        method: "POST",
        mode: "cors",
        headers: {
            Accept: "application/json"
        },
        body: JSON.stringify(req)
    })
    .catch((error) => {
        console.log("Failed to authenticate.\n", error);
        return new Response("Failed to authenticate.", { status: 500 });
    });
    return new Response(JSON.stringify(response), { status: 200 });
}