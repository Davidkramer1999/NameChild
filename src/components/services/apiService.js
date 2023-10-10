export const postRequest = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("Failed to fetch");
        }
    } catch (error) {
        throw error;
    }
};
