﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace T22_Anchorscroll_Database
{
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<City> Cities { get; set; }
    }
}