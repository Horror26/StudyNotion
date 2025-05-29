const Razorpay = require("razorpay");

// Validate environment variables
if (!process.env.RAZORPAY_KEY || !process.env.RAZORPAY_SECRET) {
    console.error("Razorpay credentials missing!");
    throw new Error("Razorpay credentials are not properly configured");
}

// Log the first few characters of the key to verify it's being loaded
console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY.substring(0, 4) + "..." + process.env.RAZORPAY_KEY.substring(process.env.RAZORPAY_KEY.length - 4));

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY.trim(),
    key_secret: process.env.RAZORPAY_SECRET.trim(),
    headers: {
        'Content-Type': 'application/json'
    }
});

// Test function to verify credentials
async function testRazorpayConnection() {
    try {
        const accountDetails = await razorpayInstance.account.fetch();
        console.log("Razorpay connection successful!");
        return true;
    } catch (error) {
        console.error("Razorpay connection test failed:", error.message);
        if (error.statusCode === 401) {
            console.error("Authentication failed. Please check your API keys.");
        }
        return false;
    }
}

// Test the connection when the module loads
testRazorpayConnection();

exports.instance = razorpayInstance;