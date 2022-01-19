using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Models;
using Microsoft.Extensions.Configuration;
using Microsoft.OpenApi.Models;

namespace WEB_Projekat
{
    public class Startup
    {
        public Startup(IConfiguration conf)
        {
            configuration = conf;
        }
        public IConfiguration configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<SvaKazina>(options =>
            {
                options.UseSqlServer(configuration.GetConnectionString("KazinoCS"));
            });
            services.AddCors(options =>
            {
                options.AddPolicy("CORS", builder =>
                {
                    builder.WithOrigins(new string[]
                    {
                        "http://127.0.0.1:5500",
                        "https://127.0.0.1:5500",
                        "https://localhost:5001",
                        "https://localhost:5500",
                        "http://localhost:5500"
                    })
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("V1", new OpenApiInfo { Title = "Kazino", Version = "V1" });
            });
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/V1/swagger.json", "Kazino V1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("CORS");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
