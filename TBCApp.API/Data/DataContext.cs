﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TBCApp.API.Models;

namespace TBCApp.API.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options):base(options)
        {
          
        }

        public DbSet<Value> MyProperty { get; set; }

    }
}

