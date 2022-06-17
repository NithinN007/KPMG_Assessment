using JWT.Models;
using JWT.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JWT.Controllers
{
    [Authorize] 
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IJWTManagerRepository _jWTManager;

        public UsersController(IJWTManagerRepository jWTManager)
        {
            this._jWTManager = jWTManager;
        }

        
        [HttpGet]
        public List<string> Get()
        {
            var Industries = new List<string>
        {
            "Aerospace and Defence",
            "Building and Contruction",
            "Consumer Markets",
            "Emerging Giants Program"
        };

            return Industries;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("authenticate")]
        public IActionResult Authenticate(Users usersdata)
        {
            var token = _jWTManager.Authenticate(usersdata);

            if (token == null)
            {
                return Unauthorized();
            }

            //try
            //{
            //    var m = 3 - 3;
            //    var n = 3 / m;
            //}
            //catch (DivideByZeroException ex)
            //{
            //    throw new Exception(ex.Message);
            //}
            //catch (Exception ex)
            //{
            //    throw new Exception(ex.Message);
            //}

           



            return Ok(token);
        }

        [HttpGet("Throw")]
        public IActionResult Throw() =>
                            throw new Exception("Sample exception.");

        [Route("/error")]
        public IActionResult HandleError() =>
    Problem();
    }
}
