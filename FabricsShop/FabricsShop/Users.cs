using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FabricsShop.AppDataFile;

namespace FabricsShop
{
    internal class Users
    {
        private int isersId { get; set; }

        private string usersSurname, usersName, usersPatronymic, login, password;

        private int usersRole { get; set; }
        public Users() { }


        public Users(string usersSurname, string usersName, string usersPatronymic, string login, string password, int usersRole)
        {
            this.usersSurname = usersSurname;
            this.usersName = usersName;
            this.usersPatronymic = usersPatronymic;
            this.login = login;
            this.password = password;
            this.usersRole = usersRole;
        }
    }
}
