using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace FabricsShop
{
    internal class ApplicationContext : DbContext
    {
        public DbSet<Users> User { get; set; }

        public ApplicationContext() : base("FabricsEntities") { }
    }
}
