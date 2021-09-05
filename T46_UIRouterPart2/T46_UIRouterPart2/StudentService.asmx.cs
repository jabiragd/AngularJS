using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;
using System.Configuration;
using System.Data.SqlClient;

namespace T46_UIRouterPart2
{
    /// <summary>
    /// Summary description for StudentService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class StudentService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public void GetAllStudents()
        {
            List<Student> studentList = new List<Student>();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents", con);
                con.Open();

                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.gender = rdr["gender"].ToString();
                    student.city = rdr["city"].ToString();

                    studentList.Add(student);
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(studentList));

        }

        [WebMethod]
        public void GetStudent(int id)
        {
            Student student = new Student();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents where id = @id", con);

                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@id",
                    Value = id
                };

                cmd.Parameters.Add(param);

                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.gender = rdr["gender"].ToString();
                    student.city = rdr["city"].ToString();
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(student));
        }

        [WebMethod]
        public void GetStudentByName(string name)
        {
            List<Student> studentList = new List<Student>();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("select * from tblStudents where name like @name", con);

                SqlParameter param = new SqlParameter()
                {
                    ParameterName = "@name",
                    Value = name + "%"
                };
                cmd.Parameters.Add(param);
                con.Open();

                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Student student = new Student();
                    student.id = Convert.ToInt32(rdr["id"]);
                    student.name = rdr["name"].ToString();
                    student.gender = rdr["gender"].ToString();
                    student.city = rdr["city"].ToString();

                    studentList.Add(student);
                }

                JavaScriptSerializer js = new JavaScriptSerializer();
                Context.Response.Write(js.Serialize(studentList));
            }
        }

        [WebMethod]
        public void GetStudentTotals()
        {
            StudentTotals totals = new StudentTotals();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("SELECT COALESCE(Gender, 'GrandTotal') AS Gender, COUNT(*) AS Total FROM tblStudents GROUP BY ROLLUP(Gender)", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    switch (rdr["Gender"].ToString())
                    {
                        case "Male":
                            totals.males = Convert.ToInt32(rdr["Total"]);
                            break;
                        case "Female":
                            totals.females = Convert.ToInt32(rdr["Total"]);
                            break;
                        default:
                            totals.total = Convert.ToInt32(rdr["Total"]);
                            break;
                    }
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(totals));
        }
    }
}
