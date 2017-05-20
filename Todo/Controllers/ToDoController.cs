using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Todo.Controllers
{
    public class ToDoController : ApiController
    {
        [Route("/todo")]
        public List<string> GetAll()
        {
            return new List<string> { "hello", "my", "name", "is", "todo"};
        }
    }
}
