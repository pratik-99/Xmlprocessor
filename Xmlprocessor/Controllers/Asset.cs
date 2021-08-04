using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xmlprocessor.Controllers
{
    public class Asset
    {
        public string Name { get; set; }
        public string AssetId { get; set; }
        public string Description { get; set; }
        public List<AssetAttribute> Attributes { get; set; }
    }
}
