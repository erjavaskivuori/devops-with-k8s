class Program
{
    static async Task Main(string[] args)
    {
        string id = Guid.NewGuid().ToString();

        while (true)
        {
            string timestamp = DateTime.UtcNow.ToString("o");

            Console.WriteLine($"{timestamp}: {id}");

            await Task.Delay(TimeSpan.FromSeconds(5));
        }
    }
}
