export const postRequest = async (url, data) => {
    console.log("postRequest", url, data);
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.log("error", error);
        throw error;
    }
};
