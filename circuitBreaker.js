class CircuitBreaker {
    constructor(action) {
        this.action = action
        this.failureCount = 0
        this.successCount = 0
    }

    async fire(options) {
        try {
            const response = await this.action(options);
            return this.success(response)
        } catch (err) {
            return this.fail(err)
        }
    }

    // Handle success requests count
    success(response) {
        this.successCount++;
        this.print("Success");
        return response;
    }

    // Handle failed requests count
    fail(err) {
        this.failureCount++;
        this.print("Failure");
        return err;
    }

    //Logs to display the success and failure count
    print(action) {
        console.table({
            Message: action,
            Successes: this.successCount,
            Failures: this.failureCount
        })
    }
}

module.exports = CircuitBreaker;


