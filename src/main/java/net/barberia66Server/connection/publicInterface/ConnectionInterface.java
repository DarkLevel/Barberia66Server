/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.barberia66Server.connection.publicInterface;

import java.sql.Connection;

/**
 *
 * @author a073597589g
 */
public interface ConnectionInterface {

    public Connection newConnection() throws Exception;

    public void disposeConnection() throws Exception;
}
